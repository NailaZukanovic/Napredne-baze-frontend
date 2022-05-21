
import { UserToken, UsersData } from "../Data/UserData";

export function UserProfile () {
    
    const user = () => {
        if (UserToken != null) {
            return UsersData.find(({username}) => username === UserToken);
        }
    }

    return (
        <>
        </>
    );
}