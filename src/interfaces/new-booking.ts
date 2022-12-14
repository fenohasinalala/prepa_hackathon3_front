/* tslint:disable */
/* eslint-disable */
/**
 * Books manager for Library
 * This is the API to get access the application to manage Bookings and Books in Library. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NewBookingBook } from './new-booking-book';
/**
 * 
 * @export
 * @interface NewBooking
 */
export interface NewBooking {
    /**
     * 
     * @type {Date}
     * @memberof NewBooking
     */
    dateHistory?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof NewBooking
     */
    available?: boolean;
    /**
     * 
     * @type {NewBookingBook}
     * @memberof NewBooking
     */
    book?: NewBookingBook;
}
