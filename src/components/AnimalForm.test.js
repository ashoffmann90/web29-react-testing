import React from 'react'
import {render, fireEvent} from '@testing-library/react'
// import App from './App'
import AnimalForm from './AnimalForm'

test('Current Animals Test Species header is appearing', () => {
    //ARRANGE
    const {getByText} = render(<AnimalForm/>)
    //ACT (no action, so no ACT phase)
    //ASSERT
    const animalHeader = getByText(/current animals test species/i)
    expect(animalHeader).toBeVisible()
})

test('inputs are rendered to the screen', () => {
    const {getByLabelText} = render(<AnimalForm/>)

    // SHOWS USEABLE METHODS IN CONSOLE
    // const result = render(<AnimalForm />);
    // console.log(result);

    const labelText = getByLabelText(/species/i)
    expect(labelText).toBeVisible()

    const ageText = getByLabelText(/age/i)
    expect(ageText).toBeVisible()

    const notesText = getByLabelText(/notes/i)
    expect(notesText).toBeVisible()
})

test('form submit adds new animals to the list', () => {
    const {getByLabelText, getByText, getByTestId} = render(<AnimalForm/>)

    const speciesInput = getByLabelText(/species/i)
    const ageInput = getByLabelText(/age/i)
    const notesInput = getByLabelText(/notes/i)

    fireEvent.change(speciesInput, {target: {value:'Hippo'}})
    fireEvent.change(ageInput, {target: {value:'32'}})
    fireEvent.change(notesInput, {target: {value:'Hippos rule'}})

    expect(speciesInput.value).toBe('Hippo')
    expect(ageInput.value).toBe('32')
    expect(notesInput.value).toBe('Hippos rule')

    fireEvent.click(getByText('Submit!'))

    const animalText = getByTestId('Hippo')
    expect(animalText).toBeInTheDocument()
})