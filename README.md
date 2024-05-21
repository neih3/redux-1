tạo store.ts:
	tạo store
	RootState và AppDispatch
tao blog.reduce.ts :
	+, tạo folder types

import Provider trong index.tsx

tạo folder constains: 
	+, cop sẵn dữ liêu blog
	+, đưa dữ liệu vào reducer
vào PostList.tsx: lấy state
	+, dung useSelector để lấy state: .blog.postList vì trong state tree, postList 			trong blog
thực hiện render post vào component PostList :
	+, thêm props cho componet con
tạo addPost (createAction)

tạo useState trong CreatePost

tạo handleSubmit

tạo dispatch:
	+, thêm action addPost
	+, viết thêm chức năng cho blogReducer

clear input khi submit blog : CreatePost
	+, set lại state bằng initialState

Xoá blog:
	+, thêm action 
	+, đặt dispatch vào postList

	Chú ý trong onclick, truyền hàm thì là truyền return của hàm, còn truyền callback mới đúng

Edit Blog:
	+, thêm action
	+, thêm state mới trong redux 
	+, thêm dispatch vào PostList
	+, CreatePost:
		- lấy state editingPost
		-show lên form: dựng useEffect
		-thêm nút edit post
	+, thêm action cancel :
		thêm dispactch cancel
		+, onReset: đặt lại trạng thái ban đầu
	+,action finishEdit
addMatcher: nếu action có chứa chữ cái nào đó
	
