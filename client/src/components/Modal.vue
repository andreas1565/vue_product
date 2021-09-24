<template  v-model="displayModal">
    
  <div class="modal" :style="displayModal ? 'display: block !important;': 'display: none !important;'" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div  class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">er du sikker på at du vil slette?</h5>
        <button type="button" class="close" @click="$emit('closeModal')" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="$emit('deleteMethood'); $emit('closeModal')">Slet</button>
        <button type="button" class="btn btn-secondary" @click="$emit('closeModal')" data-dismiss="modal">Annuller</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
data() {
    return {}
},
props:{
        show:{
            type: Boolean,
            default: false
        },
    },
computed:{
    displayModal:{
        get(){
            if(this.show) return true;
            else return false;
        },
        set(value){
            if(!value) this.$emit('closeModal');
            window.addEventListener('click', this.$emit('closeModal'));
            return false;
        }
    },
},
methods: {
    clouseModal(){
        this.$emit('closeModal');
    }
},
created() {
   window.addEventListener('click', (e) =>{
       const modal = document.querySelector('.modal');
      if(e.target == modal && modal != null){
          this.clouseModal();
      }
   });
},
}
</script>

<style>

</style>