import FirstElem from '@/components/delivery/HowWorks/howWorksElements/1/FirstElem';
import SecondElem from '@/components/delivery/HowWorks/howWorksElements/2/SecondElem';
import ThirdElem from '@/components/delivery/HowWorks/howWorksElements/3/ThirdElem';
import FourthElem from '@/components/delivery/HowWorks/howWorksElements/4/FourthElem';
import FivethElem from '@/components/delivery/HowWorks/howWorksElements/5/FivethElem';

export const steps = [
    {
        Component: FourthElem,
        description: 'You pay for the hookah rental. We accept cash.',
        id: 1,
    },
    {
        Component: SecondElem,
        description:
            'We call you back in a shortest time to confirm your order.',
        id: 2,
    },
    {
        Component: ThirdElem,
        description: 'We deliver ready-to-smoke hookah to you.',
        id: 3,
    },
    {
        Component: FirstElem,
        description:
            'Choose how many hookahs you need and fill out the form with your info',
        id: 4,
    },
    {
        Component: FivethElem,
        description: 'We come next day to pick up the hookah.',
        id: 5,
    },
];
