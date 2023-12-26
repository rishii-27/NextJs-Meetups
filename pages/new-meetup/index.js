import { useRouter } from "next/navigation";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add new Meetups!</title>
        <meta name="description" content="Add your own meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
