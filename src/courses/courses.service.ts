import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
        id: 1,
        name: "NestJS",
        description: "Fundamentos do NestJS",
        tags: ["javascript", "typescript", "express", "nodeJS", "nestjs"]
    }
    ]

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id))
        if(!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
        } else return course
    }

    create(createCourseDto: Course) {
        this.courses.push(createCourseDto)
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id)
        )

        this.courses[indexCourse] = updateCourseDto
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id)
        )
        
        if(indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }
        
    }
}
