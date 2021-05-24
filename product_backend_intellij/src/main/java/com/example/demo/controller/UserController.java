package com.example.demo.controller;

import com.example.demo.mapper.UserMapper;
import com.example.demo.vo.UserColorVO;
import com.example.demo.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserMapper userMapper;

//    @GetMapping
//    public List<UserVO> userList(){
//        System.out.println(userMapper.userList());
//        System.out.println("유저리스트 출력 성공");
//        return userMapper.userList();
//    }

    @GetMapping
    public List<UserColorVO> userColorList(){
        System.out.println(userMapper.userColorList());
        System.out.println("유저컬러리스트 출력 성공");
        return userMapper.userColorList();
    }

    @GetMapping("/category/{firstname}")
    public List<UserColorVO> category(@PathVariable String firstname){
        System.out.println("category success");
        return userMapper.category(firstname);
    }


    @PostMapping
    void insertUser(@RequestBody UserVO user){
        userMapper.insertUser(user);
        System.out.println("유저 DB 저장 성공");
    }

    @GetMapping("/{id}")
    public UserVO fetchUserByID(@PathVariable int id){
        System.out.println(userMapper.fetchUserByID(id));
        UserVO fetchUser = userMapper.fetchUserByID(id);
        return fetchUser;
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable int id, @RequestBody UserVO user){
        UserVO updateUser = user;
        System.out.println("엄데이트유저=>"+updateUser);

        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setAge(user.getAge());
        updateUser.setSalary(user.getSalary());

        userMapper.updateUser(updateUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id){
        userMapper.deleteUser(id);
        System.out.println("유저 삭제, 성공적");
    }
}