"use server";
// Server Actions

// Create a Server action to handle the form submission. This action will be called when the user submits the form. The action will receive the form data and will send it to the server.
export const addMeasure = async (formData: FormData) => {
    // Send the form data to the server
    console.log(formData)
}