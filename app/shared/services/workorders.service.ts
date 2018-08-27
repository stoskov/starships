import { Injectable } from "@angular/core";
import { KinveyService } from "~/shared/services/kinvey.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { WorkOrder } from "~/shared/models/work-order.model";
import { WorkOrderStatus } from '~/shared/enums/work-order-status';

@Injectable()
export class WorkOrdersService {
    private starshipsUrl = "https://swapi.co/api/starships";
    private workOrdersDataStore = Kinvey.DataStore.collection("case", Kinvey.DataStoreType.Network);

    constructor(private kinveyService: KinveyService) { }

    async getAllWorkOrders() {
        await this.kinveyService.login();
        let orderList = await this.workOrdersDataStore.find().toPromise();

        return orderList.map((order) => {
            return new WorkOrder(order);
        })
    }

    async getWorkOrderPerStarshipId(starshipId: string) {
        await this.kinveyService.login()

        const query = new Kinvey.Query();
        query.equalTo("Starship__c", "01tC0000005Z2KEIA0");

        let orderList = await this.workOrdersDataStore.find(query).toPromise();

        return orderList.map((order) => {
            return new WorkOrder(order);
        })
    }

    async getWorkOrderById(workOrderId: string) {
        await this.kinveyService.login()

        let workOrder = await this.workOrdersDataStore.findById(workOrderId).toPromise();
        console.log(workOrder);

        return new WorkOrder(workOrder);
    }

    async startWork(workOrderId) {
        return await this.workOrdersDataStore.save({
            _id: workOrderId,
            Status: WorkOrderStatus.Working
        });
    }

    async completeWork(workOrderId) {
        return await this.workOrdersDataStore.save({
            _id: workOrderId,
            Status: WorkOrderStatus.Closed
        });
    }
}