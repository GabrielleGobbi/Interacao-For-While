  type Student = {
      name:string;
      grades:number[];
      schoolAverage:number;
      status:string;
  }
  
  function mediaNotas ( vectorStudent : Student[] ) : string[] {
      if (vectorStudent.length!==3){
          throw new Error("Não possui 3 alunos");
      }
      const result: string[] = [];

      for(let i=0;i<3;i++){
          vectorStudent[i].schoolAverage = (vectorStudent[i].grades[0] + vectorStudent[i].grades[1] + vectorStudent[i].grades[2])/3;
          if (vectorStudent[i].schoolAverage <= 4)
              vectorStudent[i].status = "Reprovado";
          else if (vectorStudent[i].schoolAverage < 7)
              vectorStudent[i].status = "Recuperação";
          else 
              vectorStudent[i].status = "Passou";
          result.push(`${vectorStudent[i].name} : ${vectorStudent[i].status}`);

  } 
      return result;
                
  }
  
const alunos: Student[] = [
    { name: "Aluno 1", grades: [2, 2, 7], schoolAverage: 0, status: "" },
    { name: "Aluno 2", grades: [5, 6, 7], schoolAverage: 0, status: "" },
    { name: "Aluno 3", grades: [9, 7, 8], schoolAverage: 0, status: "" }
];

console.log(mediaNotas(alunos));
      