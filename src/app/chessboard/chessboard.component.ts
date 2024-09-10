import { Component, OnInit } from '@angular/core';
import { Chess } from 'chess.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chessboard',
  standalone: true,
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css'],
  imports: [CommonModule]
})
export class ChessboardComponent implements OnInit {
  chess: Chess = new Chess();
  board: any[][] = [];
  notation: string[] = [];

  ngOnInit(): void {
    this.updateBoard();
  }

  updateBoard(): void {
    const board = this.chess.board();
    this.board = board.map((row: any) => row.map((square: any) => square ? square.type : ''));
  }

  getPieceUnicode(piece: string): string {
    const unicodePieces: { [key: string]: string } = {
      'p': '♟', 'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚',  // Black pieces
      'P': '♙', 'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔'   // White pieces
    };
    return unicodePieces[piece] || '';
  }

  handleDrop(event: DragEvent, i: number, j: number): void {
    event.preventDefault();
    const from = event.dataTransfer?.getData('from');
    if (from) {
      const [fromI, fromJ] = from.split(',').map(Number);
      const move = this.chess.move({
        from: this.coordsToSquare(fromI, fromJ),
        to: this.coordsToSquare(i, j)
      });

      if (move) {
        this.notation.push(move.san);
        this.updateBoard();
      }
    }
  }

  handleDragStart(event: DragEvent, i: number, j: number): void {
    event.dataTransfer?.setData('from', `${i},${j}`);
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  handleDragEnter(event: DragEvent): void {
    event.preventDefault();
  }

  coordsToSquare(i: number, j: number): string {
    const files = 'abcdefgh';
    return files[j] + (8 - i).toString();
  }

  resetGame(): void {
    this.chess.reset();
    this.notation = [];
    this.updateBoard();
  }

  flipBoard(): void {
    this.board.reverse();
  }

  undoMove(): void {
    const move = this.chess.undo();
    if (move) {
      this.notation.pop();
      this.updateBoard();
    }
  }
}
