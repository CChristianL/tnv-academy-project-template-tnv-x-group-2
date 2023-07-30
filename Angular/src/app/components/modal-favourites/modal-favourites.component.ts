import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'tnv-modal-favourites',
  templateUrl: './modal-favourites.component.html',
  styleUrls: ['./modal-favourites.component.scss']
})
export class ModalFavouritesComponent {
  closeResult: string | undefined;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openSm(content: any) {
		this.modalService.open(content, { size: 'sm' });
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

	openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}

	openFullscreen(content: any) {
		this.modalService.open(content, { fullscreen: true });
	}

	openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

	openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}

	openModalDialogCustomClass(content: any) {
		this.modalService.open(content, { modalDialogClass: 'dark-modal' });
	}
}

