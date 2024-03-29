//파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'
//파이어베이스 패키지 모듈 가져오기
import 'firebase/compat/database';

//파이어베이스 db를 초기화하고 연결하기
const oDB = firebase.initializeApp({
    //파이어베이스 콘솔에서 복사하여 붙여넣기
databaseURL: "portfol-ee841.firebaseapp.com",


}).database();


//파이어베이스 db객체 중에서 todos 항목을 다른곳에서 사용하도록 공개
export const oTodosinDB = oDB.ref('todos');