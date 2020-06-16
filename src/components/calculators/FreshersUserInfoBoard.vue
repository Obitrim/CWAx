<template>
   <form method="post" class="bg-white" :class="{ 'p-4 my-4': separateBoard }">
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
                        v-model.number="userDetails.cumulatedCreditHours"
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
                        v-model.number="userDetails.cumulatedWeightedScore"
                        :disabled="userDetails.isFresher"
                        />
                </div>
            </div>
        </div>
    </form>
</template>


<script>

export default {
    props: {
        userDetails: {
            type: Object,
            required: true,
            validator: function(userDetails){
                if(userDetails.isFresher == undefined){
                    throw new Error('isFresher property required');
                }

                if(userDetails.cumulatedCreditHours == undefined){
                    throw new Error('cumulatedCreditHours property  required')
                }

                if(userDetails.cumulatedWeightedScore == undefined){
                    throw new Error('cumulatedWeightedScore property required on object')
                }

                return true;
            }
        },

        separateBoard: {
            type: Boolean,
            default: true
        }
    }
};
</script>