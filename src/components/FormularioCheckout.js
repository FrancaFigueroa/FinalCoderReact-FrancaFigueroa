import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCartContext } from "../CartContext";

export default function FormularioCheckout({ order, generarOrden }) {
    const [idCompra, setIdCompra] = useState(null);
    const { clearCart } = useCartContext();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm();
    const onSubmit = async (data) => {
        const buyer = { ...data };
        const newOrder = { ...order, buyer };
        const id = await generarOrden(newOrder);

        setIdCompra(id);
        setTimeout(() => {
            clearCart();
        }, 5000);
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
                defaultValue=""
                placeholder="Ingrese su nombre"
                {...register("name", { required: true })}
            />
            <input
                defaultValue=""
                placeholder="Ingrese su email"
                {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            {!isSubmitted && <input type="submit" value={"Comprar"} />}
            {idCompra && (
                <p>
                    Gracias por su compra, su número de seguimiento es: {idCompra}
                </p>
            )}
        </form>
    );
}