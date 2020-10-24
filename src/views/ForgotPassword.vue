<template>
    <div class="vue-tempalte">
        <form>
            <h3>{{ $t('forgotPassword.heading') }}</h3>

            <div class="form-group">
                <label>{{ $t('label.email') }}</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">{{ $t('button.resetPassword') }}</button>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>