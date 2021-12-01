import {Comment} from "./types";

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};

export const fetchComments = async (startIndex: number, limit: number) => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${startIndex}&_limit=${limit}`);
    return data.json();
  } catch (error) {
      console.log(error);
      return [];
  }
}

export const postComment = async (comment: Comment) => {
  try {
    const body = JSON.stringify(comment);
    const response = await fetch('https://test.steps.me/test/testAssignComment', {...requestOptions, body });
    if (!response.ok) {
       console.log('the server returned an error');
    }
    console.log("ok");
  } catch (error) {
      console.log(error);
  }
}