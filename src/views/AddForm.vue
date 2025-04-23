<template>

</template>
<script>
    export default{
        handleSubmit() {

        console.log(this.title, this.details)
        // console: Test Title Lorem Ipsum dolor sit.

        let project = {
            title: this.title,
            details: this.details,
            completed: false,
        }

        console.log(project)
        // console: {title: 'Test Title', details: 'Lorem Ipsum dolor sit.', completed: false}

        fetch('http://localhost:3000/projects', {
            method: 'POST',
            header: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'      
            },
            body: JSON.stringify(project)
        })
        //.then(() => this.$router.push('/'))
        .catch(err => console.log(err))

        }
    }

</script>
<style>

</style>
