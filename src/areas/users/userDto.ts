import { IsString, IsInt, Min, Max, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export default class UserDto {
    @IsString()
    @Length(10, 20)
    firstName: string;

    @IsString()
    @Length(10, 20)
    lastName: string;

    @Transform((value) => +value)
    @IsInt({ message: "Podaj wiek" })
    @Min(18)
    @Max(99)
    age: number;
}