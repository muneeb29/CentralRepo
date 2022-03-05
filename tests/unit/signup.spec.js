import { shallowMount } from '@vue/test-utils'
import Signup from '../../src/views/Signup.vue'
import VeeField from '@vee-validate/rules'
import ErrorMessage from '@vee-validate/rules'
import { config } from '@vue/test-utils'

config.global.components = {
  'vee-field': VeeField,
  'ErrorMessage': ErrorMessage
}

//We verify if Signup.vue it shown for the user

describe('Signup.vue', () => {
    test('does signup it shown', () => {
        const wrapper = shallowMount(Signup,{
            components: {
                'ErrorMessage': ErrorMessage
            },
            computed: {
                registerEmailSuccess: () => true,
                registerEmailError: () => false,
                registerDuplicateEmailError: () => false,
            }
        })
        
        expect(wrapper.get('#register_form').isVisible()).toBe(true)
    })
})
  