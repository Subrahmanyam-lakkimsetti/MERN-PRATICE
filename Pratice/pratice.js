// const pr = fetch('https://dummyjson.com/users');
// pr.then((val) => {
//   console.log('sucess', val);
//   const pr2 = val.json();
//   pr2.then((data) => {
//     console.log(data);
//   });
// });
async function datacall() {
  const pr = await fetch('https://dummyjson.com/users');
  const pr2 = await pr.json();
  console.log(pr2);
}


datacall();


app.post("/tasks", async (req, res) => {
  try {
      // 1. you will get the data in request
      const newObj = req.body;

      // 2. read the current list
      let text = await fsPromises.readFile("./db.json", "utf-8");
      if (text.length == 0) text = "[]";
      const arr = JSON.parse(text);

      // ------- ---------------------------------
      // 2.1 we have to generate the id
      let newId = 1;
      if (arr.length !== 0) {
          const lastTask = arr[arr.length - 1];
          newId = lastTask.id;
          newId += 1;
      }

      // 2.2 assign this new id to new object
      newObj.id = newId;
      // ------- ---------------------------------

      // 3. then append the new data into it
      arr.push(newObj);

      // 4. save the new list
      const textData = JSON.stringify(arr);
      await fsPromises.writeFile("./db.json", textData);

      res.status(201);
      res.json({
          status: "success",
      });
  } catch (err) {
      console.log("Error in POST TASKS: ", err.message);
      res.status(500);
      res.json({
          status: "fail",
          message: "Internal Server Error",
      });
  }
});