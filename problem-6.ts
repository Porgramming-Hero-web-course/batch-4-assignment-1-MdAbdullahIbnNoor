// Problem 6:
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
{
    interface Profile {
        name: string
        age: number
        email: string
    }

    type PartialProfile = Partial<Profile>

    const updateProfile = (profile: Profile, updates: PartialProfile): Profile => {

        for (const key in updates) {
            if (Object.hasOwn(updates, key)) {
                profile[key as keyof Profile] = updates[key as keyof Profile];
            }
        }
        return profile
    }

    const myProfile: Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    console.log(updateProfile(myProfile, { age: 29 }));

}