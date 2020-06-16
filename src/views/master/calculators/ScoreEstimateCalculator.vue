<template>
    <div class="m-3 score_estimator">

    	<!-- intro board -->
        <view-info-box viewTitle="Score Estimator">
        	<ul class="my-0">
        		<li>Predicted scores are suggested target marks to obtain in exams to attain one's target CWA</li>
        		<li>Estimator doesn't take into account strengths and weaknesses of students in a particular course</li>
        		<li>Estimates are suggested balanced scores to attain in specific credit hours</li>
        	</ul>
        </view-info-box>
		
		<!-- fresher's board -->
        <freshers-user-info-board 
        	class="bg-white p-4  my-4" 
        	v-if="authenticated" 
        	:userDetails="userDetails" 
        	:separateBoard="false"
        	/>

		<!-- Registered courses  -->
        <div class="bg-white my-4 p-4">
        	<div class="alert alert-info">
        		<ul class="my-0">
        			<li>Enter credit hour</li>
        			<li>Enter number of courses with credit hour entered</li>
        			<li>Click 'Add course' to add  course(s) for prediction</li>
        		</ul>
        	</div>
        	<base-table v-if="!noCategorizedCourse">
	        	<template #headings>
	        		<thead>
	        			<tr>
	        				<th>Credit Hour</th>
	        				<th>No. of courses</th>
	        				<th>Action</th>
	        			</tr>
	        		</thead>
	        	</template>
	        	<tbody>
        			<tr v-for="(category, index) in categorizedCourses" :key="index">
        				<td>{{ category.creditHour}}</td>
        				<td>{{ category.numberOfCourses}}</td>
        				<td>
        					<a href="#" class="text-danger" @click.prevent="deleteCategory(index)"><i class="fa fa-trash-alt"></i></a>
        				</td>
        			</tr>
        		</tbody>
	        </base-table>
        	<form action="#" @submit.prevent="addCategory">
        		<div class="form-row">
	        		<div class="col-sm form-group">
		        		<label for="current-cwa">Current CWA</label>
		        		<input 
		        			type="number" 
		        			step="0.01" 
		        			class="form-control" 
		        			name="currentCWA"  
		        			id="current-cwa" 
		        			v-model.number="userDetails.currentCWA"
		        			/>
		        	</div>
	        	</div>
	        	<div class="form-row">
	        		<div class="col-sm form-group">
		        		<label for="credit-hour">Credit Hour</label>
		        		<input 
		        			type="number" 
		        			class="form-control" 
		        			name="creditHour"  
		        			id="credit-hour" 
		        			v-model.number="registeredCourse.creditHour"
		        			/>
		        	</div>
		        	<div class="col-sm form-group">
		        		<label for="course-count">No. of courses</label>
		        		<input 
		        			type="number" 
		        			class="form-control" 
		        			name="courseCount"  
		        			id="course-count" 
		        			v-model.number="registeredCourse.numberOfCourses"
		        			/>
		        	</div>
	        	</div>
	        	<div class="d-flex justify-content-end mt-3">
		        	<button type="submit" class="btn btn-primary ml-sm-3">Add Course</button>
		        </div>
	        </form>
        </div>

        <!--target information-->
        <form action="#" @submit.prevent="estimateScores" class="bg-white my-4 p-4">
        	<div class="form-row">
				<div class="col-sm">
					<div class="form-group">
						<label for="target-increase">Target increase</label>
						<input
							type="number" 
							step="0.01" 
							class="form-control" 
							name="targetIncrease" 
							id="target-increase" 
							v-model.number="targetIncrease"
							/>
					</div>
				</div>
				<div class="col-sm">
					<div class="form-group">
						<label for="max-increase">Max increase</label>
						<input 
							type="number"
							step="0.01" 
							class="form-control"
							name="maxIncrease" 
							id="max-increase" 
							v-model="maxPossibleIncrease" 
							disabled />
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-end mt-3">
        		<button type="submit" class="btn btn-primary">Estimate</button>
	        </div>
        </form>
    </div>
</template>

<script>
import ViewInfoBox from '@/components/calculators/ViewInfoBox.vue';
import FreshersUserInfoBoard from '@/components/calculators/FreshersUserInfoBoard.vue';

export default {
	components: { 
		ViewInfoBox, 
		FreshersUserInfoBoard 
	},

	data(){
		return {
			authenticated: true,

			userDetails: {
                isFresher: false,
                cumulatedCreditHours: 0,
                cumulatedWeightedScore: 0,
                currentCWA: 0
            },

            categorizedCourses: [],
            registeredCourse: {
            	creditHour: 1,
            	numberOfCourses: 0
            },
            targetIncrease: 0
		}
	},

	computed: {
		noCategorizedCourse(){
			return this.categorizedCourses.length === 0;
		},

		maxPossibleIncrease(){
			let maxSemesterWeightedScore =  this.categorizedCourses.reduce((accumulator,  { creditHour, numberOfCourses }) => {
				return accumulator + creditHour * numberOfCourses * 100;
			}, 0);

			let totalCumulatedCredits = this.userDetails.cumulatedCreditHours + this.totalSemesterCredits;
			let totalCumulatedWeightedScores = this.userDetails.cumulatedWeightedScore + maxSemesterWeightedScore;
			
			return ((totalCumulatedWeightedScores / totalCumulatedCredits) - this.userDetails.currentCWA).toFixed(2);
		},

		totalSemesterCredits(){
			return this.categorizedCourses.reduce((accumulator, { creditHour, numberOfCourses }) => {
				return accumulator + creditHour * numberOfCourses;
			}, 0)
		}
	},

	methods: {
		addCategory(){
			if(
				this.registeredCourse.creditHour > 0 &&
				this.registeredCourse.creditHour &&
				this.registeredCourse.numberOfCourses > 0 &&
				this.registeredCourse.numberOfCourses
			){
				this.categorizedCourses.push({
					creditHour: this.registeredCourse.creditHour,
					numberOfCourses: this.registeredCourse.numberOfCourses,
					targetScore: 45
				});
				this.registeredCourse.creditHour = 1;
				this.registeredCourse.numberOfCourses = 0;
				return;
			}
			swal('Invalid data', 
				'Credit hour and its associated number of courses must be greater than zero', 
				'error'
			);
		},

		deleteCategory(index){
			this.categorizedCourses.splice(index, 1);
		},

		estimateScores(){
			swal({
				title: 'Possible Data Loss', 
				text: 'Data entered won\'t be saved after score estimation. Do you want to continue?', 
				icon: 'warning',
				buttons: true
			}).then(value => {
				if(!value){
					return;
				}

				// if(this.categorizedCourses.length > 0){
				// 	let newCWA = this.userDetails.currentCWA + this.targetIncrease;
				// 	let totalCredits = this.userDetails.cumulatedCreditHours + this.totalSemesterCredits
				// 	let totalTargetScores = (newCWA * totalCredits) - this.userDetails.cumulatedWeightedScore;
					
				// 	this.sortByCreditHour(this.categorizedCourses, false)

				// 	Predict scores in various categorized courses per credit hour
				// 	let totalSemesterScores = 0;
				// 	let currentCourseIndex = 0;

				// 	while(totalSemesterScores < totalTargetScores){
				// 		this.categorizedCourses[currentCourseIndex].targetScore + 1;

				// 		totalSemesterScores = this.categorizedCourses.reduce((accumulator, category) => {
				// 			return accumulator + (category.creditHour * category.numberOfCourses * category.targetScore); 
				// 		}, 0);



				// 		currentCourseIndex = currentCourseIndex == this.categorizedCourses.length 
				// 							? 0
				// 							: currentCourseIndex + 1;
				// 	}

				// 	console.log(totalSemesterScores, totalTargetScores, this.categorizedCourses);
				// }
			});
		},

		sortByCreditHour(courses = [], ascending = true){
			return courses.sort(({ creditHour }, { creditHour: next}) => {
				return ascending ? creditHour - next : next - creditHour;
			});
		}
	}
};
</script>