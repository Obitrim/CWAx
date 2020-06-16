<template>
    <div class="m-3 cwa_calculator">
        <view-info-box viewTitle="CWA Calculator">
            <ul>
                <li>
                    Cumulated Data 
                    <small>(Eg. cumalated credit hours and cumulated credit hours)</small>
                    doesn't include current semester
                </li>
                <li>Check the fresher box if this is your first year first semester results</li>
            </ul>   
        </view-info-box>

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
                            <th></th>
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
                <button class="btn btn-outline-primary mr-3" @click.prevent="addCourse">Add Course</button>
                <button class="btn btn-primary" @click.prevent="calculateCWA">Calculate</button>
            </div>
        </form>
    </div>
</template>


<script>
import ViewInfoBox from '@/components/calculators/ViewInfoBox.vue';

export default {
    components: { ViewInfoBox },

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
                courses: []
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
                this.userDetails.courses.push({
                    name: this.course.name,
                    creditHour: this.course.creditHour,
                    score: this.course.score
                });
            }
            this.course.name = "";
            this.course.creditHour = 1;
            this.course.score = 1;
        },

        deleteCourse( index ){
            this.userDetails.courses.splice(index, 1);
        },

        calculateCWA(){
            let totalWeightedScores = this.calculateTotalWeightedScores(); 
            let totalCreditHours = this.calculateTotalCreditHours();

            console.log(totalWeightedScores, totalCreditHours);
            
            if(!!totalCreditHours && totalWeightedScores){
                let newCWA = totalWeightedScores / totalCreditHours;
                swal({
                    title: 'CWA calculated',
                    text:  `Total CWA = ${newCWA.toFixed(2)}`,
                    icon: 'success'
                }).then(value => {
                    //save data if user is logged in
                })
            }
        },

        calculateTotalWeightedScores(){
            let totalSemesterWeightedScores = this.userDetails.courses.reduce(function(accumulator, currentValue){ 
                    return accumulator + (currentValue.creditHour * currentValue.score )
                }, 
                0
            );

            return totalSemesterWeightedScores + Number(this.userDetails.cumulatedWeightedScore);
        },

        calculateTotalCreditHours(){
            let totalSemesterCreditHours = this.userDetails.courses.reduce(function(accumulator, currentValue){ 
                    return accumulator + Number(currentValue.creditHour) 
                }, 
                0
            );

            return Number(this.userDetails.cumulatedCreditHours) + totalSemesterCreditHours;
        }
    }
};
</script>