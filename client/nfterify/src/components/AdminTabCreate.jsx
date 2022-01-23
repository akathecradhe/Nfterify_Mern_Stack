import Button from '@material-tailwind/react/Button';
function AdminTabCreate (){

    return (
    <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
            <a

                onClick={(e) => e.preventDefault()}
            >
                <Button
                    color="lightBlue"
                    buttonType="link"
                    ripple="dark"
                >
                    Create Item
                </Button>

            </a>
        </div>
    </div>
    )

};

export default AdminTabCreate;