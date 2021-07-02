<template>
  <!-- Login Form -->
  <div
    class="text-white text-center font-bold p-5 m-4"
    v-if="login_alert_show"
    :class="login_alert_variant"
  >
    {{ login_alert_message }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <error-message class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <error-message class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'AppLoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:6|max:100',
      },

      login_in_submission: false,
      login_alert_show: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_message: 'Logging in',
    };
  },
  methods: {
    login(values) {
      this.login_alert_show = true;
      this.login_in_submission = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_message = 'Logging in';

      this.login_alert_variant = 'bg-green-500';
      this.login_alert_message = 'Logged in!';
      console.log(values);
    },
  },
};
</script>
