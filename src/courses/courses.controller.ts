import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get('list') 
    findAll() {
        return "Listagem de cursos";
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso #${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT) // 204
    create(@Body('name') body: string) {
        return body
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: string) {
        return `Atualização do curso #${id}`
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return `Curso #${id} deletado`
    }
}
