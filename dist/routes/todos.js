"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
/**
 * 새로운 toDo를 생성한다.
 */
router.post('/', todo_1.createTodo);
/**
 * 존재하는 모든 toDo를 가져온다.
 */
router.get('/');
/**
 * 기존의 toDo를 수정
 */
router.patch('/:id');
/**
 * 기존의 toDo를 삭제
 */
router.delete('/:id');
exports.default = router;
