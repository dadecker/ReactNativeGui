export default async function PostToConsole() 
{
    try {
        let response = await fetch(
        'Your URL to fetch data from',
        );
        let responseJson = await response.json();
        console.log(responseJSon);
        return responseJson;
        } catch (error) {
        console.error(error);
        }
}