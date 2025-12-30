import FirstElem from '@/components/delivery/HowWorks/howWorksElements/1/FirstElem';
import SecondElem from '@/components/delivery/HowWorks/howWorksElements/2/SecondElem';
import SixthElem from '@/components/delivery/HowWorks/howWorksElements/6/SixthElem';
import FourthElem from '@/components/delivery/HowWorks/howWorksElements/4/FourthElem';
import FivethElem from '@/components/delivery/HowWorks/howWorksElements/5/FivethElem';

export const steps = [
    {
        Component: FirstElem,
        description:
            'Choose how many hookahs you need and fill with your info',
        id: 1,
    },
    {
        Component: SecondElem,
        description:
            'We call you back in a shortest time to confirm your order.',
        id: 2,
    },
    {
        Component: FivethElem,
        description: 'We come next day to pick up the hookah.',
        id: 3,
    },
    {
        Component: SixthElem,
        description:
            'Our hookah attendants bring ready-to-smoke hookahs to the tables.',
        id: 4,
    },
    {
        Component: FourthElem,
        description:
            'We accept cash, credit cards and PayPal and Cashapp',
        id: 5,
    },
];
