import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Button } from '../src/components/Button';
import { withKnobs, text } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

const withText = storiesOf('Component', module).add('with some emoji', () => <Button>
    {text("Label", "Hello Storybook")}
  </Button>, {
  notes: 'A very simple example of addon notes 😎',
});

withText.addDecorator(withKnobs);