import { Router } from 'express';
import {createTodo} from '../controllers/todo' 

const router = Router();

/**
 * 새로운 toDo를 생성한다.
 */
router.post('/',createTodo);

/**
 * 존재하는 모든 toDo를 가져온다.
 */
router.get('/',);

/**
 * 기존의 toDo를 수정
 */
router.patch('/:id',);

/**
 * 기존의 toDo를 삭제
 */
router.delete('/:id');


export default router;