import { mount } from '@vue/test-utils';
import News from '../../src/components/News.vue'

//We verify if News.vue it shown for the user
describe('News.vue', () => {
    test('does news it shown', () => {
        const wrapper = mount(News)
        
        expect(wrapper.find('.news').exists()).toBe(false)
    })
})
  