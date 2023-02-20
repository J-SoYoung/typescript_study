interface Post {
  id: number, 
  title: string, 
  done: boolean
}

let postItems:Post[];

// api
function fetchPostItems():Post[] {
  const posts = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return posts;
}

// crud methods
function fetchPost():Post[] {
  const posts = fetchPostItems();
  return posts;
}

function addPost(post:Post):void {
  postItems.push(post);
}

function deletePost(index:number):void {
  postItems.splice(index, 1);
}

function completePost(index:number, post:Post):void {
  post.done = true;
  postItems.splice(index, 1, post);
}

// business logic
function logFirstPost():Post {
  return postItems[0];
}

function showCompletedPost():Post[] {
  return postItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoPostItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addPost({id: 1, title: '안녕', done: false});
}

// NOTE: 유틸 함수
function log2(): void{
  console.log(postItems);
}

postItems = fetchPostItems();
addTwoPostItems();
log();