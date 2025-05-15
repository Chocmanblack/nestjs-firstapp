import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto copy';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {

    tasksService: TasksService;

    constructor(tasksService:TasksService) {
        // inyectar el servicio
        this.tasksService = tasksService;

    }
    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
    }  
    
    @Get("/:id")
    getTask(@Param('id') id: string) {
        console.log(id);
        return this.tasksService.getTask(parseInt(id));
    } 


    @Post()

    @ApiOperation({ summary: 'Create a new task' })
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    } 

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();    
    }
   
}
