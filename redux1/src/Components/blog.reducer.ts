import { createAction, createReducer, current } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { create } from 'domain'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initailState: BlogState = {
  postList: initalPostList,
  editingPost: null
}

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditPost = createAction<string>('blog/startEditPost')
export const cancelEditingPost = createAction('blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('blog/finishEditPost')

const blogReducer = createReducer(initailState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      // immerJJs
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const id = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === id)
      if (foundPostIndex !== 1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditPost, (state, action) => {
      const id = action.payload
      const foundPost = state.postList.find((post) => post.id === id) || null
      state.editingPost = foundPost
    })
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
    .addMatcher(
      (action) => action.type.includes('cancel'),
      (state, action) => {
        console.log(current(state))
      }
    )
})

export default blogReducer
