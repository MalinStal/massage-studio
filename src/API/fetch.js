
export async function getComments() {
    let result = await fetch("https://dummyjson.com/comments");
    let json = await result.json();
    return json;
  }
  export async function getUsers() {
    let result = await fetch("https://dummyjson.com/users");
    let json = await result.json();
    return json;
  }

  export async function addComments(recension) {
    let result = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: recension,
        postId: 3,
        userId: 5,
      }),
    });
    let json = await result.json();
    return json;
  }
