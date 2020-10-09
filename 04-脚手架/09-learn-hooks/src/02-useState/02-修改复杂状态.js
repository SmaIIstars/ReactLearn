import React, { useState } from "react";

export default function ComplexHookState() {
  const [friends, setFriends] = useState([
    "Smallstars",
    "Blackangel",
    "HelloKitty",
  ]);

  const [students, setStudents] = useState([
    { uid: 110, name: "Smallstars", age: 18 },
    { uid: 111, name: "Blackangel", age: 19 },
    { uid: 112, name: "HelloKitty", age: 20 },
  ]);

  function addFriend() {
    friends.push("Cat");
    setFriends(friends);
  }

  function addAge(index) {
    let newStudent = [...students];
    newStudent[index].age += 1;
    setStudents(newStudent);
  }

  return (
    <div>
      <h2>朋友列表: </h2>

      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <button onClick={(e) => setFriends([...friends, "Tom"])}>添加Tom</button>
      {/* 不会更新，setState 会比较两次地址是否相同 */}
      <button onClick={addFriend}>添加Cat</button>

      <hr />

      <h2>学生列表: </h2>
      <ul>
        {students.map((item, index) => {
          return (
            <div key={item.uid}>
              <li>
                姓名: {item.name}
                年龄: {item.age}
              </li>
              <button onClick={(e) => addAge(index)}>age+1</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
