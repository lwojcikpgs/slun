import { IsString, IsInt, Min, Max, Length } from 'class-validator';
import { Transform } from 'class-transformer';
import { IUserModel } from '../../types/user';

export default class UserDto implements IUserModel {
    @IsString()
    @Length(1, 20)
    firstName: string;

    @IsString()
    @Length(1, 20)
    lastName: string;

    @Transform((value) => +value)
    @IsInt({ message: "Podaj wiek" })
    @Min(18)
    @Max(99)
    age: number;
}