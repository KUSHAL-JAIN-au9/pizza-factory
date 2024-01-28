import { Button, DarkThemeToggle, Flowbite, Table } from "flowbite-react";
import {
  ORDER_IN_MAKING,
  ORDER_PICKED,
  ORDER_PLACED,
  normalBackground,
} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { CalculateTime } from "../utils/utils.js";
import { useEffect } from "react";
import { cancelOrder } from "../redux/order.reducer";

const PizzaTable = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  return (
    <div className={`overflow-x-auto lg:px-32 px-5 mb-4   `}>
      <Flowbite>
        {/* <DarkThemeToggle defaultValue={"dark"} /> */}
        <Table hoverable className="min-h-fit">
          <Table.Head>
            <Table.HeadCell>Order Id</Table.HeadCell>
            <Table.HeadCell>Stage</Table.HeadCell>
            <Table.HeadCell>Total Time</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            {/* <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell> */}
          </Table.Head>
          <Table.Body className="divide-y">
            {orders.map((order) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {order.id}
                </Table.Cell>
                <Table.Cell>{order.status}</Table.Cell>
                <Table.Cell>
                  {CalculateTime(
                    order.acceptedOrderTime?.seconds +
                      order.makingTime.seconds +
                      order.pickingTime.seconds
                  )}
                </Table.Cell>
                <Table.Cell>
                  {/* <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a> */}
                  {order.status === ORDER_PLACED ||
                    (order.status === ORDER_IN_MAKING && (
                      <Button
                        gradientMonochrome="failure"
                        onClick={() =>
                          dispatch(cancelOrder({ orderId: order?.id }))
                        }
                      >
                        Cancel
                      </Button>
                    ))}
                </Table.Cell>
              </Table.Row>
            ))}
            {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
              <Table.Cell>$1999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell> */}
            {/* </Table.Row> */}
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>Total Orders:{orders?.length}</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Flowbite>
    </div>
  );
};

export default PizzaTable;
