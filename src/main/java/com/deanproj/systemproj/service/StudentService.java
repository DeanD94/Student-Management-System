package com.deanproj.systemproj.service;

import com.deanproj.systemproj.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
