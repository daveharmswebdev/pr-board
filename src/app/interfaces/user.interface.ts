'use strict'

export interface User {
    user_name: String;
    last_name: String;
    first_name: String;
    middle_initial?: String;
    height: Number;
    weight: Number;
    password: String;
}