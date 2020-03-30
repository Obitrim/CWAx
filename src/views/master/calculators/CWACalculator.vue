<template>
    <div class="m-3 cwa_calculator">
        <div class="p-4 bg-white">
            <h1>CWA Calculator</h1>
            <div class="alert alert-info mt-4">
                <ul>
                    <li>
                        Cumulated Data 
                        <small>(Eg. cumalated credit hours and cumulated credit hours)</small>
                        doesn't include current semester
                    </li>
                    <li>Check the fresher box if this is your first year first semester results</li>
                </ul>
            </div>
        </div>

        <form method="post" class="p-4 my-4 bg-white">
            <div class="form-group">
                <input 
                    type="checkbox" 
                    class="mr-2" 
                    id="fresher" 
                    v-model="userDetails.isFresher"
                    /> 
                <label class="form-label" for="fresher">Fresher</label>
            </div>
            <div class="form-row">
                <div class="col-sm">
                    <div class="form-group">
                        <label 
                            for="cumulated_credit_hours" 
                            :class="{ 'text-muted': userDetails.isFresher}"
                            > Cumulated credit hours
                        </label>
                        <input 
                            type="number" 
                            name="cumulatedCreditHours" 
                            class="form-control" 
                            id="cumulated_credit_hours"
                            v-model="userDetails.cumulatedCreditHours"
                            :disabled="userDetails.isFresher"
                            />
                    </div>
                </div>
                <div class="col-sm">
                     <div class="form-group">
                        <label 
                            for="scores" 
                            :class="{ 'text-muted': userDetails.isFresher}"
                            > Cumulated Scores
                        </label>
                        <input 
                            type="number" 
                            name="cumulatedScores" 
                            class="form-control" 
                            id="scores"
                            v-model="userDetails.cumulatedWeightedScore"
                            :disabled="userDetails.isFresher"
                            />
                    </div>
                </div>
            </div>
        </form>

        <div class="bg-white p-4  my-4" v-if="!noCourses">
            <base-table>
                <template #headings>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Credit Hours</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                </template>
                <tbody>
                    <tr v-for="(course, index) in userDetails.courses" :key="index">
                        <td>{{ course.name }}</td>
                        <td>{{ course.creditHour }}</td>
                        <td>{{ course.score }}</td>
                        <td>
                            <a href="#" class="text-danger" @click.prevent.stop="deleteCourse(index)">
                                <i class="fa fa-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </base-table>
        </div>

        <form method="POST" class="bg-white p-4  my-4">
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <label for="course">Course</label>
                        <input 
                            type="text" 
                            name="course" 
                            class="form-control" 
                            id="course"
                            v-model="course.name"
                            />
                    </div>
                </div>
                <div class="col">
                     <div class="form-group">
                        <label for="credit_hour">Credit Hour</label>
                        <input 
                            type="number" 
                            name="credit_hour" 
                            class="form-control" 
                            id="credit_hour"
                            v-model="course.creditHour"
                            />
                    </div>
                </div>
                <div class="col">
                     <div class="form-group">
                        <label for="score">Score</label>
                        <input 
                            type="number" 
                            name="score" 
                            class="form-control" 
                            id="score"
                            v-model="course.score"
                            />
                    </div>
                </div>
            </div>
            
            <div class="form-group text-right">
                <button class="btn btn-outline-success mr-3" @click.prevent="addCourse">Add Course</button>
                <button class="btn btn-success">Calculate</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    data(){
        return {
            course: {
                name: '',
                creditHour: 1,
                score: 1
            },

            userDetails: {
                isFresher: false,
                cumulatedCreditHours: 0,
                cumulatedWeightedScore: 0,
                courses: [
                    {
                        name: 'CSM 154',
                        creditHour: 3,
                        score: 89
                    },
                    {
                        name: 'ENGL 154',
                        creditHour: 1,
                        score: 99
                    },
                    {
                        name: 'CSM 158',
                        creditHour: 3,
                        score: 80
                    },
                    {
                        name: 'CSM 168',
                        creditHour: 2,
                        score: 89
                    },
                    {
                        name: 'CSM 181',
                        creditHour: 2,
                        score: 76
                    },
                    {
                        name: 'CSM 154',
                        creditHour: 3,
                        score: 89
                    },
                ]
            },
        }
    },

    computed: {
        noCourses(){
            return this.userDetails.courses.length === 0;
        }
    },

    methods: {
        addCourse(){
            if(this.course.name && this.course.creditHour && this.course.score){
                this.userDetails.courses.push({ ...this.course });
            }
            this.course.name = "";
            this.course.creditHour = 1;
            this.course.score = 1;
        },

        deleteCourse( index ){
            this.userDetails.courses.splice(index, 1);
        },
    }
};
</script>