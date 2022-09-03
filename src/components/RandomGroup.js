import "./RandomGroup.css";

function RandomGroup(props) {
  const { studentsArr, num = 2 } = props;
  let newStudentsArr = [...studentsArr];
  let randomArr = newStudentsArr.sort(() => 0.5 - Math.random());
  let randomGroup = [];
  for (let i = 0; i < randomArr.length; i += num) {
    let part = randomArr.slice(i, i + num);
    randomGroup.push(part);
  }
  return randomGroup.map((group, i) => {
    return (
      <div className="random-group" key={group}>
        <ol>
          <h3>Grupo {i + 1}:</h3>
          {group.map((studentName) => {
            return (
              <li className="list" key={studentName}>
                {studentName}
              </li>
            );
          })}
        </ol>
      </div>
    );
  });
}

export default RandomGroup;
