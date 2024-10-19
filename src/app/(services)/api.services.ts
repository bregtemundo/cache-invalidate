export async function revalidate() {
  try {
    const response = await fetch('/revalidate', {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to revalidate');
    }
    console.log('Revalidation successful');
  } catch (error) {
    console.error('Error during revalidation:', error);
  }
}