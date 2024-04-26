import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JobResponseDto } from "../models/JobResponseDto";
import { environment } from "projects/front-end/src/environments/environment";
import { Observable } from "rxjs";
import { JobEditRequestDto } from "../models/JobEditRequestDto";

@Injectable()
export class JobService{
    constructor(private http:HttpClient){}
        /**
         * name
         */
         getJobs() {
            const request= this.http.get<Observable<JobResponseDto>>(environment.apiUrl)
           return request;
        } 
        /**
        * name
        */
        getJobsById() {
           const request= this.http.get<Observable<JobResponseDto>>(environment.apiUrl)
          return request;
       }

        /**
        * name
        */
        addJob(job:JobEditRequestDto) {
            const request= this.http.post<Observable<JobEditRequestDto>>(environment.apiUrl,job);
          
            return request;
        } 

        editJob(job:JobEditRequestDto) {
            const request= this.http.put<Observable<JobEditRequestDto>>(environment.apiUrl,job);
          
            return request;
        } 

        deleteJob(job:JobEditRequestDto) {
            const request= this.http.delete<Observable<String>>(environment.apiUrl);
          
            return request;
        } 

}