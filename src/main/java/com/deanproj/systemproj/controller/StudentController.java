package com.deanproj.systemproj.controller;

import com.deanproj.systemproj.model.Student;
import com.deanproj.systemproj.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student has been added";
    }

    @GetMapping("/getAll")
    public List<Student> getAll() {
        return studentService.getAllStudents();
    }
}
