let students = require('../../mocks/students');

class StudentsRepository {

  //Função de selecionar todos os estudantes
  findAll() {
    return students;
  }

  //Função de selecionar os estudantes pelo id
  findById(id) {
    const studentById = students.find((student) => student.id === id);
    return studentById;
  }

  //Função de selecionar os estudantes pelo email
  findByEmail(email) {
    const studentByEmail = students.find((student) => student.email === email);
    return studentByEmail;
  }

  //Função de selecionar o último estudante
  findLast() {
    const lastStudent = students[students.length - 1];
    return lastStudent;
  }

  //Função de criar um novo estudante
  create({
    id, name, email, cep, address, number, neighborhood, city, uf, degree, age,
  }) {
    const newStudent = {
      id, name, email, cep, address, number, neighborhood, city, uf, degree, age,
    };

    students.push(newStudent);

    return newStudent;
  }

  //Função de atualizar os dados de um estudante
  update(id, {
    name, email, cep, address, number, neighborhood, city, uf, degree, age,
  }) {
    const updatedStudent = {
      id, name, email, cep, address, number, neighborhood, city, uf, degree, age,
    };

    students = students.map((currentStudent) => (currentStudent.id === id
      ? updatedStudent
      : currentStudent));

    return updatedStudent;
  }

  //Função de deletar um estudante (pelo id)
  delete(id) {
    const newStudents = students.filter((student) => student.id !== id);
    students = newStudents;
    return newStudents;
  }
}

module.exports = new StudentsRepository();
