<template>
    <div id="header-bar" align="right">

    <button id="close-button" class="x1">X</button>
    
    </div>

    <form id="sign-in-form" class="flex column">

        <input type="email" placeholder="Email" id="user-email" name="userEmail" required><br>
        <input type="password" placeholder="Password" id="user-password" name="userPassword" required><br>

        <div id="submit-container" class="flex">
            <div class="x3"></div>
            <button id="submit" type="submit" class="x2">Submit</button>
            <div class="x3"></div>
        </div>

        <div id="create-account-pointer-container">
            <p id="create-account-pointer-link">Don't have an account? Create one.</p>
            <p id="create-account-pointer">Creating an account allows you to store production vals. for up to three factories across sessions.</p>
        </div>

    </form>
</template>

<style scoped>
    input {
        font-size: 16px;
        padding-left:5px;
    }

    #sign-in-dialog {
        padding: 0px;
        width: 400px;
        position: absolute;
        text-align: center;
    }

    #sign-in-form {
        margin: 15px;
        padding: 5px;
    }

    #close-button {
        height: 25px;
        width: 25px;
    }

    #submit {
        height: 25px;
    }

    #create_account_pointer_container {
        text-align: center;
    }

    #header-bar {
        background-color: #c23838;
        height: 25px;
        width: 100%;
    }
</style>