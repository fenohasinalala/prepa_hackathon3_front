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
import { NewBookCategory } from './new-book-category';
/**
 * 
 * @export
 * @interface NewBookingBook
 */
export interface NewBookingBook {
    /**
     * 
     * @type {number}
     * @memberof NewBookingBook
     */
    idBook?: number;
    /**
     * 
     * @type {string}
     * @memberof NewBookingBook
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBookingBook
     */
    author?: string;
    /**
     * 
     * @type {number}
     * @memberof NewBookingBook
     */
    pages?: number;
    /**
     * 
     * @type {string}
     * @memberof NewBookingBook
     */
    synopsis?: string;
    /**
     * 
     * @type {NewBookCategory}
     * @memberof NewBookingBook
     */
    category?: NewBookCategory;
}
