import { shallowMount } from '@vue/test-utils';
import Rating from '@/components/Rating';

let wrapper = null;

beforeEach(() => {
    wrapper = shallowMount(Rating, {
        propsData: {
            maxStars: 5,
            initialGrade: 2
        }
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe("Rating", () => {
    it("renders the starts", () => {
        const stars = wrapper.findAll('.star');
        expect(stars.length).toBe(5);
    });

    it("renders the active stars", () => {
        const activeStars = wrapper.findAll('.star.active');
        expect(activeStars.length).toBe(2);
    });

    it("render a summary", () => {
        const summary = wrapper.find(".summary");
        expect(summary.text()).toBe("2 of 5");
    })
});